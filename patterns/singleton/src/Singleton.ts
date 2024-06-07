class Singleton{
    //variável estática privada
    private static instance: Singleton;

    //construtor privado
    private constructor(){}

    public static getInstance(): Singleton {
        if(!Singleton.instance){
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }

    //fazendo alguma coisa
    public executar(): void{
        console.log("Executando algo");
    }
}

export default Singleton;