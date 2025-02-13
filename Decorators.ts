function first():any {
    console.log("first(): factory evaluated");
    return function (target: any, propertyKey: string) {
        console.log("first(): executed");
    };
}

function second():any {
    console.log("second(): factory evaluated");
    return function (target: any, propertyKey: string) {
        console.log("second(): executed");
    };
}

class ExampleClass {
    @first()
    @second()
    method(): void {
        console.log("Method executed");
    }
}

const obj = new ExampleClass();
obj.method();
