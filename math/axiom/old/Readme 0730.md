# Theorem of Straight knot
##### Author: Shigeo Hattori
##### Date: 2020/7/20


### Nottations

For standard notations of knot diagram, we borrow the following quoted definitions from [Coward](https://arxiv.org/pdf/0903.1789.pdf). 

> All link diagrams shall be regarded as 4–valent graphs embedded in $$R^2$$ with signed intersections to denote overcrossings or undercrossings. All diagrams shall be oriented so as to represent an oriented link. $$\Omega\uparrow_1, \Omega\downarrow_1, \Omega\uparrow_2, \Omega\downarrow_2$$ and $$\Omega_3$$ shall denote Reidemeister moves where the arrow indicates whether the move increases the number of crossings in the diagram, or decreases it.

<br/>

In addition, we define that: 
- A $$\Omega_0$$ move is a move exactly on a closed interval on the knot diagram which does not change the diagram.


<img src="images/readme/Rmv0.svg" alt="Rmv0" width="20%"/>

### Summary 1

<img src="images/readme/LRmv2.svg" alt="LRmv2" width="20%"/>
 

We define a u-knot on an unknot diagram.

Let $$D,L1,L2,L3$$ be all such that:
- D is an unknot diagram.
- All of $$L1,L2$$ is an open interval on an edge of $$D$$.
- $$L1\cap L2=\emptyset$$
- $$L$$ is a line segment between points of $$L1,L2$$ such that:
  - $$L3\cap D=\{p1,p2\}$$
  - $$L3$$ is absolutely higher or absolytely lower on the diagram.

Then $$D,L1,L2,L3$$ is said a uknot on $$D$$ at $$L1,L2$$.
If some uknot at $$L1,L2$$ is not trivial, that is:
- having non-zero unknotting number.

Then $$L1,L2$$ is said to be non trivial.

For all u-knot at $$L1,L2$$, to simplify $$U$$, we move only $$L1$$ (or only $$L2$$) as the mover of Reidemeister moves so that the unknotting number of the u-knot decreases.

We prove that: To simplify $$U$$, a straight-motion of the mover is enough, that is:
- All point $$p$$ on the mover, the orbit $$b(p)$$ of $$p$$ is a straight line segment.
  - $$b(p)$$ = image of $$f(\{p\}*[0,1])$$ for the ambient isotopy $$f$$ on $$R^2$$.
<br/>

We also prove that: If there exists no u-knot on the unknot diagram then: To most simplify $$D$$, a straight-motion of $$D$$ is enough.

<img src="images/readme/lyredR.svg" alt="lyredR" width="100%"/>
 

 Before giving the formal definition, the example figures above demonstrate how to find a $$_{L}\Omega\downarrow$$ move on a knot diagram, left. 
 
 In the 2nd figure, we found a boundary for a $$_{L}\Omega$$ move. And in the 3rd figure, we divide the component lines into at most 3 blocks, calling each block as a layer. Notice that all component lines of all lower layer does not overcross component lines of all higher layer. 
 
 Note that $$\Omega$$ denotes a Reidemeister move.
 
 Finally ignoring other layers, we find a $$\Omega$$ move on some layer which, in this case, happen to be a $$\Omega_2$$ move on the middle layer. We call the move as a $$_{L}\Omega$$ move on the knot diagram.

### Preparation for the main theorem




##### Local diagram

Let $$D_K,D_J$$ be all such that: 
- $$D_K$$ is a knot diagram. 
- $$D_J$$ is a $$D_K$$ limited to some open disk $$C$$ of which boundary is a polygon.
  - In other words, $$D_J = D_K \cap C$$ for some open disk $$C\subset R^2$$.
- No crossing of $$D_K$$ exists at $$bondary(D_J)$$.
- For all pair $$(k1,k2)$$ from bondary$$(D_J)\cap D_K$$:
  - some neighbourhoods of $$k1,k2$$ are diagrammatically identical even if we respect both of $$D_K,D_J$$.


Then $$D_J$$ is said a local diagram of $$D_K$$. 
 

<img src="images/readme/localDgrm.svg" alt="localDgrm" width="50%"/>

<br/>


We often follow a convention as: when a local diagram is introduced with some necessary condition, the number of crossings and component lines are minimum as long as it satisfies the necessary condition.

<br/>

##### Mover and targets of $$\Omega$$

We set a convention that, for all $\Omega$ move, we express it as a move only on some closed interval on some commponent line on the local diagram. The closed interval is said the mover ( of the expression ) of the move.

For all mover $$L1$$, all componet line $$L2$$ is said a target of the mover if $$L1 \cup L2$$ will change diagrammatically at some time point of the move.

##### Reidemeister move of type 0, $$\Omega_0$$
It is natural to define a Reidemeister move of type 0 as:
- The local diagram for the move contains exactly one component line.
- The diagram is diagrammatically constant before after the move.
- It may have a mover not static.



<img src="images/readme/Rmv0.svg" alt="Rmv0" width="20%"/>


##### Layers on a local diagram

Let $$D,E$$ be all such that $$E$$ is a local diagram on a knot diagram $$D$$. We may divide the set of component lines of $$E$$ into at most three blocks labeled with numbers in $$\{1, 0, -1\}$$ so that:
- All smaller-numbered component line does not overcross any larger-numbered component line. 
- If zero is in use as a label then the other two numbers are in use. 
- Analogously if 1 is in use as a label then -1 is in in use. 


We may use labels, upper | middle | lower, in place of 2 | 1 | 0 respectively.

<br/>

<img src="images/readme/localDgrmLyr.svg" alt="localDgrmLyr" width="50%"/>


> In the rest, under the name of the symetry of logic, we may omit repeating trivially redundent statements or definitions. For example, the term "upper layer" trivially implies an undefined term "lower layer".

<br/>

##### Layered Reidemeister moves, $$_{lyr}\Omega$$

Let $$L,E$$ be all such that: $$L$$ is a layer of a local diagram $$E$$. If ignoring other layers let us realize some $$\Omega$$ move on $$L$$ then we say that both of $$E,D$$ accepts a strict layered Reidemeister move at $$L$$. And write the move as $$_{L}\Omega$$. 

Note that $$_{L}\Omega\downarrow$$ indicates that the move simplifies the whole diagram at least by one crossing.

##### Layered Reidemeister move, $$_{L}\Omega\downarrow$$

Let $$D,m$$ be all such that:
- $$D$$ is a knot diagram.
- $$m$$ is a $$_{Lyr}\Omega$$ move on $$D$$ such that:
  - $$m$$ simplifies $$D$$ at least by one crossing.
  - Or:
    - $$m$$ does not change the number of crossings on $$D$$.
    - Instead $$m$$ results some new move $$m1$$ which is a $$\Omega\downarrow_1$$ to a smaller diagram than $$D$$.
    - Let $$m2$$ denote $$m$$ followed by $$m1$$ .


Then all in $$\{m,m2\}$$ is said a layered Reidemeister move, $$_{L}\Omega\downarrow$$:
- If it simplifies $$D$$.

Note that the inverse move of $$_{L}\Omega\downarrow$$ is said a $$_{L}\Omega\uparrow$$ move.

### Main theorem

All non trivial unknot diagram can be simplified at leat by one crossing:
-  Through some $$_L\Omega\downarrow$$.
-  Or through some $$_L\Omega_0$$ move $$m$$ followed by:
  - some $$\Omega_1$$ newly created by $$m$$. 
