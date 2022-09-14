import { Injectable } from '@angular/core';

import { AbstractStorage } from './storage.interface';
import { MemoryStorage } from './memory.storage';
import { storageAvailable } from './storage.util';

@Injectable({
  providedIn: 'root',
})
export class SessionStorage extends AbstractStorage {
  constructor() {
    super(storageAvailable('sessionStorage') ? window.sessionStorage : new MemoryStorage());
  }
}
