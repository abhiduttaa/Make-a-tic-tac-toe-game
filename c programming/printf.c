#include<stdio.h>
int main(){
    int i,j,n;
    char x[100],y[100];
    printf("enter a string=");
    scanf("%[^\n]",&n);
    y[0]=x[0];
    j=1;
    for(i=1;x[i]!='\0';i++)
    {
        if(x[i]==' ')
        {
            i++;
            y[j]=x[i];
            j++;
        }
    }
    y[j]='\0';
     printf("given string is=%s\n",x);
      printf("new string is=%s\n",y);
      return 0;
}