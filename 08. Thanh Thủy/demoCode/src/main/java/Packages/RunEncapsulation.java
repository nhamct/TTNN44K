package Packages;

public class RunEncapsulation {
    public static void main(String args[]) {
        Encapsulation encap = new Encapsulation();
        encap.setId(1);
        encap.setName("Meo Meo");
        encap.setAge(2);

        System.out.print("Name : " + encap.getName() + " Age : " + encap.getAge());
    }
}
