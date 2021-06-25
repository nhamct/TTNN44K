class Animal {
    public void move(){
        System.out.println("Animals can move");
    }
}
class Cat extends Animal{
    public void move(){
        System.out.println("Cat can walk and run");
    }
}
public class Overriding {
    public static void main(String[] args) {
        Animal a = new Animal();
        Animal b = new Cat();

        a.move();
        b.move();
    }
}
