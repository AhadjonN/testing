import { Injectable } from '@angular/core';

import { AbstractStorage } from './storage.interface';
import { MemoryStorage } from './memory.storage';
import { storageAvailable } from './storage.util';

@Injectable({
  providedIn: 'root',
})
export class LocalStorage extends AbstractStorage {
  constructor() {
    super(storageAvailable('localStorage') ? window.localStorage : new MemoryStorage());
  }
}
