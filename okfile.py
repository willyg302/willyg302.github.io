project = 'WillyG Productions Site'

def resume():
	'''Build resume PDF'''
	with ok.root('resume'):
		ok.run('pdflatex William_Gaul_CV.tex')

def install():
	ok.npm('install').bower('install', root='app')

def default():
	'''Build the site'''
	ok.node('gulp', module=True)
