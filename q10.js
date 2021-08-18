function Hero(name, level)
{
name = name;
level = level;
}


/*********ANSWER********/


//1st--->As this is a constructor so there will not be 'function' keyword before 'Hero'

//2nd--->and also if there are same variable names we have to use this.name=name; and this.level=level; 
//instead of name = name; and level = level;


//*********CORRECTED CODE**************//

Hero(name, level)
{
this.name = name;
this.level = level;
}
