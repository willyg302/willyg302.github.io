project = 'WillyG Productions Site'

def install():
	strap.npm('install').bower('install', root='app')

def default():
	strap.node('gulp', module=True)
