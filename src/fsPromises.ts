/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

// node.js already has a promise-based API for all async fs operations
// that is available via require('fs').promises. However, in node.js 10.x
// (LTS version at the time of writing) a really ugly "Experimental Feature"
// warning is logged to stdout, which is going to confuse people unfamiliar
// with node. This module is to prevent those warnings, and can be deleted
// when the min node version for this lib is 12.x

import fs from 'fs';
import { promisify } from 'util';

export const readFile = promisify(fs.readFile);
export const mkdir = promisify(fs.mkdir);
export const writeFile = promisify(fs.writeFile);
export const readdir = promisify(fs.readdir);
export const copyFile = promisify(fs.copyFile);
export const access = promisify(fs.access);
