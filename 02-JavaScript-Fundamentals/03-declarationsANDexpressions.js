//# FUNCTION declarations AND expressions
//#======================================

    //* DOESNT MATTER WHICH YOU USE
    //? REMEMBER HOW TO USE AND DISTINGUISH

    //# FUNCTION DECLARATION
    //#=====================
    function calcAge1(birthYeah) {
        const age = 2037 - birthYeah;
        return age;
    }

    const age1 = calcAge1(1991); //# save value into a variable
    console.log(age1);

    //# FUNCTION EXPRESSION
    //#====================

        //! CANNOT BE CALLED BEFORE DECLARING
        


    //# ANONYMOUS FUNCTION === function without a name
    const calcAge2 = function (birthYeah) {
        return 2037 - birthYeah
    }

    const age2 = calcAge2(1991);

    console.log( age1, age2); // 46, 46