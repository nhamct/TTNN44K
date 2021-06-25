class DongVat {
    public void amThanh() {
        System.out.println("Phat ra am thanh");
    }
}

class meo extends DongVat {
    public void amThanh() {
        System.out.println("Am thanh cua meo: meo meo");
    }
}

class dog extends DongVat {
    public void amThanh() {
        System.out.println("Am thanh cua dog: gow gow");
    }
}

class Test {
    public static void main(String[] args) {
        DongVat a = new DongVat();
        DongVat b = new meo();
        DongVat c = new dog();
        a.amThanh();
        b.amThanh();
        c.amThanh();
    }
}