//package Inheritance;

class Vehicle {
    protected String brand = "Yamaha";        // Vehicle attribute
    public void honk() {                    // Vehicle method
        System.out.println("bip, bip!");
    }
}

class Moto extends Vehicle {
    private String modelName = "Jupiter";    // moto attribute
    public static void main(String[] args) {

        // Create a myMoto object
        Moto myMoto = new Moto();

        // Display the value of the brand attribute (from the Vehicle class) and the value of the modelName from the Moto class
        System.out.println(myMoto.brand + " " + myMoto.modelName);

        // Call the honk() method (from the Vehicle class) on the myMoto object
        myMoto.honk();
    }
}
