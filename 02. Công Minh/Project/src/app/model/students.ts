export interface Student {
  id: number;
  name: string;
  email: string;
  address: string;
  phone: string;
  dateSubmited: number;
  isEdit: boolean;
}

// export const students: Student[] = [
//   {
//     id: 1,
//     name: "Trương Công Minh",
//     address: "Quảng Ngãi",
//     phone: "0916685091",
//     isEdit: false
//   },
//   {
//     id: 2,
//     name: "Nguyễn Thùy Dung",
//     address: "Đà Nẵng",
//     phone: "0905957700",
//     isEdit: false
//   },
//   {
//     id: 3,
//     name: "Nguyễn Công Phúc",
//     address: "Quảng Nam",
//     phone: "0968485091",
//     isEdit: false
//   },
//   {
//     id: 4,
//     name: "Phạm Thị Thu Thảo",
//     address: "Quảng Nam",
//     phone: "0414569091",
//     isEdit: false
//   },
//   {
//     id: 5,
//     name: "Lê Viết Bình",
//     address: "Quảng Trị",
//     phone: "0914789091",
//     isEdit: false
//   },
//   {
//     id: 6,
//     name: "Trương Huyền Trang",
//     address: "Quảng Ngãi",
//     phone: "0316601261",
//     isEdit: false
//   },
//   {
//     id: 7,
//     name: "Trương Gia Bình",
//     address: "Hồ Chí Minh",
//     phone: "0916125491",
//     isEdit: false
//   },
//   {
//     id: 8,
//     name: "Nguyễn Thị Thảo",
//     address: "Quảng Ngãi",
//     phone: "0516653001",
//     isEdit: false
//   },
//   {
//     id: 9,
//     name: "Đinh Bảo Lộc",
//     address: "Nghệ An",
//     phone: "0911485091",
//     isEdit: false
//   },
//   {
//     id: 10,
//     name: "Trần Thiên Tú",
//     address: "Quảng Trị",
//     phone: "0112469491",
//     isEdit: false
//   },
//   {
//     id: 11,
//     name: "Nguyễn Nhật Linh",
//     address: "Đà Nẵng",
//     phone: "0911236491",
//     isEdit: false
//   },
//   {
//     id: 12,
//     name: "Nguyễn Thùy Dung",
//     address: "Huế",
//     phone: "0916685091",
//     isEdit: false
//   },
//   {
//     id: 13,
//     name: "Nguyễn Thùy Dung",
//     address: "Huế",
//     phone: "0916685091",
//     isEdit: false
//   },
//   {
//     id: 14,
//     name: "Nguyễn Thùy Dung",
//     address: "Huế",
//     phone: "0916685091",
//     isEdit: false
//   },
//   {
//     id: 15,
//     name: "Nguyễn Thùy Dung",
//     address: "Huế",
//     phone: "0916685091",
//     isEdit: false
//   },
//   {
//     id: 16,
//     name: "Nguyễn Thùy Dung",
//     address: "Huế",
//     phone: "0916685091",
//     isEdit: false
//   },
//   {
//     id: 17,
//     name: "Nguyễn Thùy Dung",
//     address: "Huế",
//     phone: "0916685091",
//     isEdit: false
//   },
//   {
//     id: 18,
//     name: "Nguyễn Thùy Dung",
//     address: "Huế",
//     phone: "0916685091",
//     isEdit: false
//   },
//   {
//     id: 19,
//     name: "Nguyễn Thùy Dung",
//     address: "Huế",
//     phone: "0916685091",
//     isEdit: false
//   },
//   {
//     id: 20,
//     name: "Nguyễn Thùy Dung",
//     address: "Huế",
//     phone: "0916685091",
//     isEdit: false
//   },
//   {
//     id: 21,
//     name: "Nguyễn Thùy Dung",
//     address: "Huế",
//     phone: "0916685091",
//     isEdit: false
//   },
//   {
//     id: 22,
//     name: "Nguyễn Thùy Dung",
//     address: "Huế",
//     phone: "0916685091",
//     isEdit: false
//   },
//   {
//     id: 23,
//     name: "Nguyễn Thùy Dung",
//     address: "Huế",
//     phone: "0916685091",
//     isEdit: false
//   },
//   {
//     id: 24,
//     name: "Nguyễn Thùy Dung",
//     address: "Huế",
//     phone: "0916685091",
//     isEdit: false
//   },
//   {
//     id: 25,
//     name: "Nguyễn Thùy Dung",
//     address: "Huế",
//     phone: "0916685091",
//     isEdit: false
//   },
//   {
//     id: 26,
//     name: "Nguyễn Thùy Dung",
//     address: "Huế",
//     phone: "0916685091",
//     isEdit: false
//   },
//   {
//     id: 27,
//     name: "Nguyễn Thùy Dung",
//     address: "Huế",
//     phone: "0916685091",
//     isEdit: false
//   },
//   {
//     id: 28,
//     name: "Nguyễn Thùy Dung",
//     address: "Huế",
//     phone: "0916685091",
//     isEdit: false
//   },
//   {
//     id: 29,
//     name: "Nguyễn Thùy Dung",
//     address: "Huế",
//     phone: "0916685091",
//     isEdit: false
//   },
//   {
//     id: 30,
//     name: "Nguyễn Thùy Dung",
//     address: "Huế",
//     phone: "0916685091",
//     isEdit: false
//   },
//   {
//     id: 31,
//     name: "Nguyễn Thùy Dung",
//     address: "Huế",
//     phone: "0916685091",
//     isEdit: false
//   },
//   {
//     id: 32,
//     name: "Nguyễn Thùy Dung",
//     address: "Huế",
//     phone: "0916685091",
//     isEdit: false
//   },
//   {
//     id: 33,
//     name: "Nguyễn Thùy Dung",
//     address: "Huế",
//     phone: "0916685091",
//     isEdit: false
//   },
//   {
//     id: 34,
//     name: "Nguyễn Thùy Dung",
//     address: "Huế",
//     phone: "0916685091",
//     isEdit: false
//   },
//   {
//     id: 35,
//     name: "Nguyễn Thùy Dung",
//     address: "Huế",
//     phone: "0916685091",
//     isEdit: false
//   },
//   {
//     id: 36,
//     name: "Nguyễn Thùy Dung",
//     address: "Huế",
//     phone: "0916685091",
//     isEdit: false
//   },
//   {
//     id: 37,
//     name: "Nguyễn Thùy Dung",
//     address: "Huế",
//     phone: "0916685091",
//     isEdit: false
//   },
//   {
//     id: 38,
//     name: "Nguyễn Thùy Dung",
//     address: "Huế",
//     phone: "0916685091",
//     isEdit: false
//   },
//   {
//     id: 39,
//     name: "Nguyễn Thùy Dung",
//     address: "Huế",
//     phone: "0916685091",
//     isEdit: false
//   },
//   {
//     id: 40,
//     name: "Nguyễn Thùy Dung",
//     address: "Huế",
//     phone: "0916685091",
//     isEdit: false
//   },
//   {
//     id: 41,
//     name: "Nguyễn Thùy Dung",
//     address: "Huế",
//     phone: "0916685091",
//     isEdit: false
//   },
//   {
//     id: 42,
//     name: "Nguyễn Thùy Dung",
//     address: "Huế",
//     phone: "0916685091",
//     isEdit: false
//   },
//   {
//     id: 43,
//     name: "Nguyễn Thùy Dung",
//     address: "Huế",
//     phone: "0916685091",
//     isEdit: false
//   },
// ]
