//
//  TPSBarryManager.m
//  TPSBarry
//
//  Created by Anton Kuznetsov on 22.11.16.
//  Copyright © 2016 Tipsi. All rights reserved.
//

#import "TPSBarryManager.h"
#import "RCTLog.h"

@implementation TPSBarryManager

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(scanBarcode:(NSString *)name label:(NSString *)label)
{
  RCTLogInfo(@"Scan wine with name %@ and label %@", name, label);
}

@end
