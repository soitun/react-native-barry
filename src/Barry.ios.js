import { NativeModules } from 'react-native'
import processTheme from './processTheme'

const { TPSBarryManager } = NativeModules

class Barry {
  scanBarcode = (name, label) => (
    TPSBarryManager.scanBarcode(name, label)
  )
}

export default new Barry()
