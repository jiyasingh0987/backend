public class student{
    public static void main(String [] args){
//         byte b = -128;
//         System.out.println(b);

//     }
// }
 int []mynum={10,20,30,40,50};
        // for (int i=0;i<mynum.sum;i++){
        //     System.out.println(mynum[i]);
        // }
        
    
        // int sum = 0;
        // for (int i=0;i<mynum.length;i++){
        //     sum += mynum[i];
        // }
        // System.out.println("sum of array is " + sum);
        
    int sum = 0;
    for (int i : mynum){
        sum += i;
    }
    System.out.println("sum of array is " + sum);   