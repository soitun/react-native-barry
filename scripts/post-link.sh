#!/bin/sh

ios_dir=`pwd`/ios
if [ -d ios_dir ]
  then
  exit 0
fi

cartfile="Cartfile"
scannerDep="github 'mikebuss/MTBBarcodeScanner'"

echo "Checking Cartfile in iOS project ($cartfile)"

if ! grep -q "$scannerDep" "$cartfile"
  then
  echo "Adding the following pod to Cartfile":
  echo ""
  echo $scannerDep
  echo ""

  echo $scannerDep >> $cartfile
fi

echo "Update Carthage"

carthage update
