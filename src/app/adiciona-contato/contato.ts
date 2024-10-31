export enum TipoContato { 
    AMIGO = 'Amigo(a)',
    TRABALHO = 'Trabalho',
    FAMILIA = 'Família',
    OUTRO = 'Outro(a)'
}

export class Contato {
    private _nome: string = ''
    private _telefone: string = ''
    private _email: string = ''
    private _aniversario: Date = new Date()
    private _tipo: TipoContato = TipoContato.AMIGO
    private _favorito: boolean = false; 

    constructor(nm: string, tel: string, 
               em: string, an: Date, tp: TipoContato, fav: boolean) {
        this.nome = nm
        this.telefone = tel
        this.email = em
        this.aniversario = an
        this.tipo = tp
        this._favorito = fav; 
    }

    public get nome(): string {
        return this._nome
    }
    public set nome(value: string) {
        this._nome = value
    }
    public get telefone(): string {
        return this._telefone
    }
    public set telefone(value: string) {
        this._telefone = value
    }

    public get email(): string {
        return this._email
    }
    public set email(value: string) {
        this._email = value
    }
   
    public get aniversario(): Date {
        return this._aniversario
    }
    public set aniversario(value: Date) {
        this._aniversario = value
    }
  
    public get tipo(): TipoContato {
        return this._tipo
    }
    public set tipo(value: TipoContato) {
        this._tipo = value
    }

    public get favorito(): boolean {
        return this._favorito
    }
    public set favorito(value: boolean) {
        this._favorito = value
    }
}