class HashTable {
    constructor() {
        this.table = new Array(127);
        this.size = 0;
        this.MAX_LOAD_FACTOR = 0.8;
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
      //  console.log("table length : ", this.table.length);
        return hash % this.table.length;
    }

    set(key, value) {
        const index = this._hash(key);
        if (this.table[index] == undefined) {
            this.table[index] = new Array();
        }

        this.table[index].push([key, value]);
        this.size++;

        let loadFactor = this.size / this.table.length;
        if (loadFactor > this.MAX_LOAD_FACTOR) {
            this.rehash();
        }
    }

    get(key) {
        const index = this._hash(key);
        for (let i = 0; i < this.table[index].length; i++) {
            if (this.table[index][i][0] == key) {
                return this.table[index][i][1];
            }
        }
    }

    remove(key) {
        const index = this._hash(key);
        for (let i = 0; i < this.table[index].length; i++) {
            if (this.table[index][i][0] == key) {
                this.table[index] = [];
                this.size--;
            }
        }
    }
    print() {
        console.log(this.table);
    }

    rehash() {
        let oldHashTable = this.table;
        this.table = new Array(2 * oldHashTable.length);


    }


}
const ht = new HashTable();
ht.set("one", 10);
ht.set("two", 15);
ht.set("three", 90);
ht.set("four", 87);
ht.set("five", 84);
ht.set("six", 40);
ht.set("seven", 65);

console.log(ht.get("one"));
console.log(ht.get("two"));
console.log(ht.get("three"));
console.log(ht.get("four"));
console.log(ht.get("five"));
console.log(ht.get("six"));
console.log(ht.get("seven"));
ht.print();

// ht.remove("one");
// ht.print();