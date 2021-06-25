abstract class Shape{
    abstract void draw();
}

class Rectangle extends Shape{
    void draw(){
        System.out.println("Ve hinh chu nhat");
    }
}

class Circle extends Shape{
    void draw(){
        System.out.println("Ve hinh tron");
    }
}

//Trong tinh huong nay, phuong thuc duoc goi boi lap trinh vien hoac nguoi dung  
class TestAbstraction{
    public static void main(String args[]) {
        Shape tr = new Circle();
        Shape nh = new Rectangle();
        tr.draw();
        nh.draw();

    }
} 