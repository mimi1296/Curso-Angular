export class DestinoViaje {
    private selected: boolean;
    servicios: string[];
    constructor(public nombre: string, public imagenUrl: string) { 

        this.selected = false;
        this.servicios = ['Pileta', 'Desayuno']
    }
    isSelected(): boolean{
        return this.selected;
    }
    setSelected(m:boolean) {
        this.selected = m;
    }
}