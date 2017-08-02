import os

path_app = os.path.abspath(os.path.join('..', 'app'))
os.chdir('../..')
path_app_rel = os.path.relpath(path_app)
print 'Visit: http://localhost:9000/{}/'.format(path_app_rel)
os.system('python -m SimpleHTTPServer 9000')
