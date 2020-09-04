  
# Quantity of Information to express simplicial complex polyhedron
##### Author: Shigeo Hattori
##### Date: 2020/7/20

### Axiom化するsimplexに成りたつcondition

これらの条件を満たすならば、simplex/complexでなくても後述の法則が成り立つ。
尚、simplicial complexはsimplexの和とみなす
上限なく、全ての有限次元のユークリッド空間について定義されている
。


R の部分集合 $$X$$ への制限C[X]を定義でき、やはりsimplex
- $$C[X]$$ is a simplex.
- $$(X1\subset X2)$$ $$\to$$ $$(C[X1]\subset C[X2])$$
- $$C[X1]\cup C[X2]$$ $$\subset$$ $$C[X1\cup X2]$$
- $$C[X1\cap X2]$$ $$\subset$$ $$C[X1]\cap C[X2]$$

Rの有限個の点集合を引数に、Rのsubspaceを特定する。
X\subset C2 \to C(X)\subset C2
C(X)は有限点集合Xが特定するsimplex


### Summary 1

Let $$n\geq 0$$ be a constant.
Let $$R^n,M^n$$ denote the Euclidean space as the metric space where $$M^n$$ is th metric table to define $$R^n$$.

For all simplicial complex $$C$$:
- $$C$$ as a subspace of Euclidean space is:
  - Said an s.c.polyhedron, say $$K$$.
  - We write as $$K = |C|_E$$.

For all s.c.polyhedron $$K$$:
- Let $$K_C$$:=$$\{C | \space\space K=|C|_E\}$$.
- Let $$K_V$$:=$$\{|V|$$ $$|$$ $$C\in K_C$$ $$\land$$ $$V$$ is the set of vertices of $$C$$ $$\}$$.
- Let $$f(K)$$:= "the minimum number of $$K_V$$".
- Let $$K_{a.i.}$$:= $$\{K2$$ $$|$$ $$K2$$ is ambient isotopic to $$K$$ on $$R^n$$ $$\}$$.

Let $$P_{K,n}$$:= $$\{K2\in K_{a.i.}$$ $$|$$ $$f(K2)=n$$ $$\}$$.

> ##### Axiom1
For all pair $$K1,K2$$ from $$P_{K,n}$$:
- For some ambient isotopy $$f$$ on $$R^n$$:
  - $$f$$ takes $$K1$$ to $$K2$$ so that:
    - $$K1_{f,t} \in P_{K,n}$$ for all $$t\in [0,1]$$
      - $$K1_{f,t}:=$$ image of $$f[K1*\{t\}]$$.

<br/>

 <img src="images/readme/Rmv0.svg" alt="Rmv0" width="20%"/>


The motion of not redundently simplifing an unknot $$K1$$ to the trivial unknot in the 3-dimension must not be redundent in the  4-dimension.

polygonal knots間の閉じたambient isotopyの集合が存在する

