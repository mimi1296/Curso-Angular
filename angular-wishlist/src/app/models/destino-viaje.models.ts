export class DestinoViaje {
    private selected: boolean;
    constructor(public nombre: string, public imagenUrl: string) { 
        this.selected = false;
    }
    isSelected(): boolean{
        return this.selected;
    }
    setSelected(m:boolean) {
        this.selected = m;
    }
}