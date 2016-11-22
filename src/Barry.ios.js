import { NativeModules } from 'react-native'

const { TPSBarryManager } = NativeModules

class Barry {
  scanBarcode = (name, label) => (
    TPSBarryManager.scanBarcode(name, label)
  )
}

export default new Barry()
