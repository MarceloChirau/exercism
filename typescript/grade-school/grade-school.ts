interface rosterObj{
[key:number]:string[]
}


export class GradeSchool {

  private schoolRoster:rosterObj={};

  roster():rosterObj {
if(Object.keys(this.schoolRoster).length===0){
  return {};
}else{
  return JSON.parse(JSON.stringify(this.schoolRoster));
}
  }
//this.schoolRoster[grade].includes(student)
  add(student:string,grade:number) {

    // If student is already somewhere else, move them.
    for (const [existingGradeKey, students] of Object.entries(this.schoolRoster)) {
      const idx = students.indexOf(student);
      if (idx !== -1) {
        students.splice(idx, 1);
        // Optional cleanup: drop empty grade buckets
        if (students.length === 0) {
          delete this.schoolRoster[Number(existingGradeKey)];
        }
      }
    }
    if (!this.schoolRoster[grade]){
      this.schoolRoster[grade]=[];
    }

      this.schoolRoster[grade].push(student);
      this.schoolRoster[grade].sort();
    

    }
  

   grade(grade:number) {
    if (!this.schoolRoster[grade]){
      return [];
    }
    if(Object.keys(this.schoolRoster) && Object.values(this.schoolRoster).length===0){
      return [];
    }else{

      return JSON.parse(JSON.stringify(this.schoolRoster[grade]));
    }

  }
}
