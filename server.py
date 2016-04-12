#
#	server.py
#
#	serve website

import tornado.web
import tornado.ioloop
import json

widgets = [
{'name': 'Die cutter', 'length': 35},
{'name': 'Milling machine', 'length': 1000}
]

class APIHandler(tornado.web.RequestHandler):
	def get(self):
		available_methods = [
			'get_widgets', 'new_widget'
		]
		method = self.get_argument('method', None)
		if method in available_methods:
			return self.write(json.dumps(getattr(self, '_' + method)()))
		else:
			raise tornado.web.HTTPError(404)

	def post(self):
		return self.get();

	def get_argument(self, name, default=None):
		try:
			body = json.loads(self.request.body)
		except ValueError:
			body = []
		if name in body:
			return json.dumps(body[name])
		else:
			return super(APIHandler, self).get_argument(name, default=default)

	def _new_widget(self):
		widgets.append(json.loads(self.get_argument('widget')))
		return { "result": "OK" }

	def _get_widgets(self):
		return widgets

app = tornado.web.Application([
	(r'/()', 	tornado.web.StaticFileHandler, {'path': 'web/index.html'}),
	(r'/api', 	APIHandler),
	(r'/(.*)', 	tornado.web.StaticFileHandler, {'path': 'web/'})
])

app.listen(8080)
tornado.ioloop.IOLoop.instance().start()
