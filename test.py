#
#   test.py
#
#   run the test scripts for the application.

import subprocess
import unittest

class BuildTest(unittest.TestCase):
    def test_production_build(self):
        subprocess.check_output(["npm", "run", "build"])

tests = [
    BuildTest
]

for t in tests:
    suite = unittest.TestLoader().loadTestsFromTestCase(t)
    unittestresult = unittest.TextTestRunner(verbosity=0, failfast=True).run(suite)
    if not unittestresult.wasSuccessful():
        raise Exception("Test failed, quitting.")

# If we get this far, we passed the tests.
print """
########     ###     ######   ######  ######## ########
##     ##   ## ##   ##    ## ##    ## ##       ##     ##
##     ##  ##   ##  ##       ##       ##       ##     ##
########  ##     ##  ######   ######  ######   ##     ##
##        #########       ##       ## ##       ##     ##
##        ##     ## ##    ## ##    ## ##       ##     ##
##        ##     ##  ######   ######  ######## ########
"""
