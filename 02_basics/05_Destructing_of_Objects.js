// ==================== DESTRUCTING OF OBJECTS (Important Topic) ======================================================


const course = {
    coursename : "JS in Hindi",
    price : "999",
    courseInstructor : "Devansh" 
}


// course.courseInstructor // Syntax (makes the code readability messy)
const {courseInstructor} = course // here we have extracted the values from the object (new way)
const {courseInstructor : instructor} = course // SYNTAX
console.log(courseInstructor); // primary SYNTAX
console.log(instructor); // another way of giving SYNTAX

// ===================== API ==============================================================================

//{                                   
//    "course" : "Devansh",              // JSON format (API can be found/received in this format),  SYNTAX of which is in such way here ( within the curly braces {} )
//    "coursename" : "JS in Hindi",
//    "price" : "free"


// [             // APIs can be received/found in such way also (in array format, that also is JSON format) 
//    {},
//    {},   
//    {}


// ]