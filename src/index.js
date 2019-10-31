import {configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {mocha} from 'mocha'
import app from './comps/app/index.spec'

configure({adapter:new Adapter()})

mocha.setup('bdd')
mocha.checkLeaks()

app()

mocha.run()
