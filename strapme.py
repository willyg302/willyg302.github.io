project = 'WillyG Productions Site'

def _npm_bower(command):
	strap.run('npm {}'.format(command))
	with strap.root('app'):
		strap.run('bower {}'.format(command))

def clean():
	_npm_bower('prune')
	_npm_bower('cache clean')

def install():
	_npm_bower('install')

def default():
	strap.run('node_modules/.bin/gulp')
