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

#### Új bejegyzés
- Új bejegyzés vehető fel a Leírás, Összeg és a Típus mezők kitöltésével.

#### Szerkesztés
- Minden bejegyzett árú Leírás, Összeg és Típus mezője szerkeszthető.

#### Törlés
- Minden bejegyzett árú törölhető.

### Modell
- Felhasználó: Vezetéknév, Keresztnév, Neptun-kód, Jelszó, Avatar URL
- Bejegyzés: Típus, Összeg, Típus

### A szerepkörök funkciói
Minden az oldalra nem regisztrált felhasználó vendég, akinek megfelelő bejelentkezési adatok birtokában joga van bejelentkezni. Regisztrálás után riporter jogot kap a felhasználó, illetve bekerült egy operátor jog is bővítés céljából.

- Vendég: joga van a megfelelő adatok birtokában bejelentkezni, regisztrálni.
- Riporter: bejelentkezés után joga van, megtekinteni a listaoldalt, új bejegyzést írni, szerkeszteni, illetve törölni.
- Operátor: lényegében azt tudja, mint a riporter.

### Tesztelés

- Az alkalmazasok/models/user.test.js fájl teszteli a user-t.
- A felületet Selenium segítségével könnyedén lehet tesztelni.

### Implementáció

A project a cloud9 (https://c9.io) segítségével készült, amely egy remek internetes fejlesztői környezet. A program tartalmazza a controllereket, a modelleket, a megjelenő oldalakat (views mappa). A funkciók javascriptben lettek megírva az órán tanultak alapján. A megjelenő oldalakat hbs kiterjesztésűek, ami igazából htmlre épül.

### A project githubon és Herokun is elérhető
A projectet klónoztam githubra és feltöltöttem Herokura.

####Ezek az alábbi linkeken érhetőek el:
- github: https://github.com/papophone/alkalmazasok
- Heroku: https://alkfejlraktar.herokuapp.com/

### Felhasználói dokumentáció

#### Futtatás
A futtatáshoz elég egy böngésző, amely képes kezelni a javascriptet, nem igényel egyéb erőforrást.

#### Telepítés
A github project a https://github.com/papophone/alkalmazasok címen érhető el és a jobb oldalt található ,,Download as zip" gomb segítségével tölhető le. Ezután igényel egy kicsomagolást, miután localhoston futtatható lesz.

#### A program használata
Localhostra telepítés után könnyedén szerkeszthető és újra felhasználható.


