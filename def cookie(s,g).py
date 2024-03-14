def cookie(s,g):
    n,m,i,j=len(s),len(g),0,0
    s.sort()
    g.sort()
    while(i<n and j<m):
        if(s[i]>=g[j]):
            j+=1
        i+=1
    return j
s=list(map(int,input("cookie: ").split()))
g=list(map(int,input("greed: ").split()))
print(cookie(s,g))