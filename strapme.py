project = 'WillyG Productions Site'

def _npm_bower(command):
	strap.npm(command)
	strap.bower(command, root='app')

def clean():
	_npm_bower('prune')
	_npm_bower('cache clean')

def install():
	_npm_bower('install')

def default():
	strap.node('gulp', module=True)
