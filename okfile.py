project = 'WillyG Productions Site'

def install():
	ok.npm('install').bower('install', root='app')

def default():
	ok.node('gulp', module=True)
