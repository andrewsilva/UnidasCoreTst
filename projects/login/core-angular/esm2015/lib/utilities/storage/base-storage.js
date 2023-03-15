export class BaseStorage {
    constructor(storage) {
        this._storage = storage;
    }
    setData(key, value) {
        if (!key || value === null || value === undefined) {
            throw new Error('key and value are requireds!');
        }
        this._storage.setItem(key, JSON.stringify(value));
    }
    removeData(key) {
        if (!key) {
            throw new Error('key is required!');
        }
        this._storage.removeItem(key);
    }
    getData(key) {
        if (!key) {
            throw new Error('key is required!');
        }
        return JSON.parse(this._storage.getItem(key));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1zdG9yYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS1hbmd1bGFyL3NyYy9saWIvdXRpbGl0aWVzL3N0b3JhZ2UvYmFzZS1zdG9yYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sT0FBTyxXQUFXO0lBR3RCLFlBQVksT0FBZ0I7UUFDMUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7SUFDMUIsQ0FBQztJQUVELE9BQU8sQ0FBQyxHQUFXLEVBQUUsS0FBVTtRQUM3QixJQUFJLENBQUMsR0FBRyxJQUFJLEtBQUssS0FBSyxJQUFJLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUNqRCxNQUFNLElBQUksS0FBSyxDQUFDLDhCQUE4QixDQUFDLENBQUM7U0FDakQ7UUFFRCxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRCxVQUFVLENBQUMsR0FBVztRQUNwQixJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ1IsTUFBTSxJQUFJLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1NBQ3JDO1FBRUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELE9BQU8sQ0FBVyxHQUFXO1FBQzNCLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDUixNQUFNLElBQUksS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUM7U0FDckM7UUFFRCxPQUFVLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNuRCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJU3RvcmFnZVNlcnZpY2UgfSBmcm9tIFwiLi9zdG9yYWdlLmludGVyZmFjZVwiO1xuXG5leHBvcnQgY2xhc3MgQmFzZVN0b3JhZ2UgaW1wbGVtZW50cyBJU3RvcmFnZVNlcnZpY2Uge1xuICBwcm90ZWN0ZWQgcmVhZG9ubHkgX3N0b3JhZ2U6IFN0b3JhZ2VcblxuICBjb25zdHJ1Y3RvcihzdG9yYWdlOiBTdG9yYWdlKSB7XG4gICAgdGhpcy5fc3RvcmFnZSA9IHN0b3JhZ2U7XG4gIH1cblxuICBzZXREYXRhKGtleTogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgaWYgKCFrZXkgfHwgdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdrZXkgYW5kIHZhbHVlIGFyZSByZXF1aXJlZHMhJyk7XG4gICAgfVxuXG4gICAgdGhpcy5fc3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcbiAgfVxuXG4gIHJlbW92ZURhdGEoa2V5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAoIWtleSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdrZXkgaXMgcmVxdWlyZWQhJyk7XG4gICAgfVxuXG4gICAgdGhpcy5fc3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG4gIH1cblxuICBnZXREYXRhPFQ9b2JqZWN0PihrZXk6IHN0cmluZyk6IFQge1xuICAgIGlmICgha2V5KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2tleSBpcyByZXF1aXJlZCEnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gPFQ+SlNPTi5wYXJzZSh0aGlzLl9zdG9yYWdlLmdldEl0ZW0oa2V5KSk7XG4gIH1cbn1cbiJdfQ==