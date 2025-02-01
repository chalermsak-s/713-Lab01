const names = ["Somchai", "Anan", "Nattapong", "Boonmee", "Lek"];
names.forEach(name => {
    if (name.length > 6) {
        console.log(`สวัสดีคุณ ${name}`);
    } else {
        console.log(`Hello ${name}`);
    }
});
