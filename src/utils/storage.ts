type StorageType = 'local' | 'session';

function getStorage(type: StorageType): Storage | null {
	if (typeof window === 'undefined') {
		return null;
	}
	return type === 'local' ? window.localStorage : window.sessionStorage;
}

export const storage = {
	get<T>(key: string, type: StorageType = 'local'): T | null {
		const storage = getStorage(type);
		if (storage) {
			try {
				return JSON.parse(storage.getItem(key) ?? 'null');
			} catch {
				return null;
			}
		}
		return null;
	},
	set<T>(key: string, value: T, type: StorageType = 'local') {
		const storage = getStorage(type);
		if (storage) {
			storage.setItem(key, JSON.stringify(value));
		}
	},
	remove(key: string, type: StorageType = 'local') {
		const storage = getStorage(type);
    if (storage) {
      storage.removeItem(key);
    }
	},
};

export const STORAGE_KEY = {
	THEME: 'theme'
};
