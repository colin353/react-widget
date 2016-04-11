#
#	server.py
#
#	serve website

import tornado.web
import tornado.ioloop

app = tornado.web.Application([
	(r'/()', 	tornado.web.StaticFileHandler, {'path': 'web/index.html'}),
	(r'/(.*)', 	tornado.web.StaticFileHandler, {'path': 'web/'})
])

app.listen(8080)
tornado.ioloop.IOLoop.instance().start()
