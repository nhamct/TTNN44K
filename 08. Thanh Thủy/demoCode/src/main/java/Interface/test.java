package Interface;

public class test implements Print{
    @Override
    public void print() {
        System.out.println("Hello");
    }

    public static void main(String[] args) {
        test a = new test();
        a.print();
    }
}
