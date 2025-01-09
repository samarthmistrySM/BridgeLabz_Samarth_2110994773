class SamError extends Error{
    constructor(message){
        super(message)
        this.name = "SamError"
    }
}

function Test(){
    throw new SamError('Sam Error')
}

try {
    Test()
} catch (error) {
    console.log(error.message)
}