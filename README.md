# Alkalmazások fejlesztése első beadandó

## Az első beadandó feladata

### Követelmények
Első beadandóként egy kis webes alkalmazás elkészítése a cél szerveroldali technológiák segítségével. A feladatnak mininálisan tartalmaznia kell:

- legalább két modellt, egy-sok kapcsolatban
- legalább 1 űrlapot
- legalább 1 listázó oldalt
- legyen lehetőség új felvételére
- legyen lehetőség meglévő szerkesztésére
- legyen lehetőség meglévő törlésére
- legyenek benne csak hitelesítés után elérhető funkciók
- perzisztálás fájlba történjen
- közzététel Herokun

Az órai cloud9 projectből indultam és egészítettem ki az elvárt dolgokkal.

### A feladat rövid leírása

A raktár bevételezése című feladatot választottam. Lehetőség van regisztrációra és bejelentkezésre. A raktárkészlet feltöltésére és a raktár áttekintésére is. Lehet szerkeszteni, illetve törölni. A kezelőfelület csak bejelentkezés után érhető el. A két modell egy-sok kapcsolatban a felhasználó és a raktárbejegyzések, hiszen egy felhasználóhoz több raktárbejegyzés is tartozhat.

### Raktárkészlet feltöltése

#### Típus
- Beszállítás (alapértelmezett)
- Eladás
- Selejt-árú
- Törött árú
- Számlázott árú

#### Összeg
- Kötelező mező az ár.

#### Leírás
- Szintén kötelező mező, amely a termék leírását tartalmazza.

### A raktár áttekintése
- Leírás
- Összeg
- Jelleg (típus)
- Bejegyezve (dátum)
- Szerkesztés
- Törlés

### Szerkesztés
- Minden bejegyzett árú szerkeszthető.

### Törlés
- Minden bejegyzett árú törölhető.

### Implementáció

A project a cloud9 (https://c9.io) segítségével készült, amely egy remek internetes fejlesztői környezet. A program tartalmazza a controllereket, a modelleket, a megjelenő oldalakat (views mappa). A funkciók javascriptben lettek megírva az órán tanultak alapján. A megjelenő oldalakat hbs kiterjesztésűek, ami igazából htmlre épül.

### A project githubon és Herokun is elérhető

A projectet klónoztam githubra és feltöltöttem Herokura.
####Elérhetőségek: 
- github: https://github.com/papophone/alkalmazasok
- Heroku: https://alkfejlraktar.herokuapp.com/

### Felhasználói dokumentáció

#### Futtatás
Mivel egy nem túl gépigényes alkalmazásról van szó, ezért minden netezni képes számítógépről könnyedén futtatható.

#### Telepítés
A github project a https://github.com/papophone/alkalmazasok címen érhető el és a jobb oldalt található ,,Download as zip" gomb segítségével tölhető le. Ezután igényel egy kicsomagolást, miután localhoston futtatható lesz.

#### A program használata
Localhostra telepítés után könnyedén szerkeszthető és újra felhasználható.


