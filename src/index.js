import {configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {mocha} from 'mocha'
import test1 from '../test/test1'

configure({adapter:new Adapter()})

mocha.setup('bdd')
mocha.checkLeaks()

test1()

mocha.run()
