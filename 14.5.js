let student = [
    {
        "name": "Nguyen Van A",
        "age": 20,
        "id": 1,
    },
    {
        "name": "Nguyen Van B",
        "age": 22,
        "id": 2,
    },
    {
        "name": "Nguyen Van C",
        "age": 21,
        "id": 3,
    }
];

let choice = +prompt("Nhap lua chon: 1. Hien thi danh sach, 2. Them sinh vien, 3. Xoa sinh vien, 4. Sua sinh vien, 5. Tim kiem sinh vien");

switch (choice) {
    case 1:
        alert("Danh sach sinh vien:");
        for (let i = 0; i < student.length; i++) {
            alert(`ID: ${student[i].id}, Name: ${student[i].name}, Age: ${student[i].age}`);
        }
        break;
        
    case 2:
        let name = prompt("Nhap ten sinh vien moi:");
        let age = +prompt("Nhap tuoi sinh vien moi:");
        let newId = student.length + 1;
        let newStudent = {
            "name": name,
            "age": age,
            "id": newId
        };
        student.push(newStudent);
        alert("Sinh vien moi da duoc them.");
    case 3:
        let deleteId = +prompt("Nhap ID sinh vien can xoa:");
        if ( deleteId === 0 || deleteId > student.length) {
            alert("ID khong hop le.");
        } else {
            student = student.filter(s => s.id !== deleteId);
            alert("Sinh vien da duoc xoa.");
        }
        break;
    case 4:
        let editId = +prompt("Nhap ID sinh vien can sua:");
        if (editId === 0 || editId > student.length) {
            alert("ID khong hop le.");
        } else {
            let editName = prompt("Nhap ten moi cho sinh vien:");
            let editAge = +prompt("Nhap tuoi moi cho sinh vien:");
            student.forEach(s => {
                if (s.id === editId) {
                    s.name = editName;
                    s.age = editAge;
                }
            });
            alert("Sinh vien da duoc sua.");
        }
        break;
    case 5:
        let searchName = prompt("Nhap ten sinh vien can tim:");
        let foundStudents = student.filter (s => s.name.toLowerCase().includes(searchName.toLowerCase()));
        if (foundStudents.length > 0) {
            alert("Ket qua tim kiem:");
            foundStudents.forEach(s => {
                alert(`ID: ${s.id}, Name: ${s.name}, Age: ${s.age}`);
            });
        } else {
            alert("Khong tim thay sinh vien.");
        }
        break;
    default:    
        alert("Lua chon khong hop le. Vui long chon lai.");
        break;
    
    }

    console.log(student); 