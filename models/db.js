var mysql   = require('mysql');
var db  = require('./db_connection.js');

/* DATABASE CONFIGURATION */
var connection = mysql.createConnection(db.config);

exports.GetAll = function(callback) {
    connection.query('select * from Game_stats',
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            console.log(result);
            callback(false, result);
        }
    );
}


exports.GetAll2 = function(callback) {
    connection.query('select * from Season_stats',
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            console.log(result);
            callback(false, result);
        }
    );
}



exports.GetAll3 = function(callback) {
    connection.query('select * from Starters',
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            console.log(result);
            callback(false, result);
        }
    );
}



exports.GetAll4 = function(callback) {
    connection.query('Select SUM(Points) AS GameTotalPoints From Game_stats;',
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            console.log(result);
            callback(false, result);
        }
    );
}






exports.GetAll5 = function(callback) {
    connection.query('select Num ,Name from Game_stats Where Num In (select Num from Season_stats Where PPG > 10);',
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            console.log(result);
            callback(false, result);
        }
    );
}




exports.GetAllView = function(callback) {
    console.log("You must create the CoursesView MySQL VIEW for the sql statement below to work.");
    // To create the StudentsView run the CREATE VIEW query below via the mysql client or mysql workbench.
    // CREATE VIEW StudentsView AS SELECT * FROM Student;
    connection.query('select Num, Name from RosterView',
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            callback(false, result);
        }
    );
}


exports.GetByID = function(courseid, callback) {
    console.log(courseid);
    var query = 'select * from Team_roster WHERE Num=' + courseid;
    console.log(query);
    connection.query(query,
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            callback(false, result);
        }
    );
}

exports.Insert = function(courseid, callback) {
    console.log(courseid);
    var query = 'INSERT INTO Team_roster (Num, Name, Position, Age, Height, Weight, College) VALUES (\'' + courseid.Num + '\', \'' + courseid.Name + '\', \'' + courseid.Position + '\', \'' + courseid.Age + '\', \'' + courseid.Height + '\',\'' + courseid.Weight + '\', \'' + courseid.College + '\')';
    console.log(query);
    connection.query(query,
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return
            }
            callback(false, result);
        }
    );
}


exports.Update = function(courseid, callback) {
    console.log(courseid);
    var query = 'UPDATE Team_roster SET Name="'+ courseid.Name + '", Position="'+ courseid.Position + '",Age="'+ courseid.Age + '",Height="'+ courseid.Height + '",Weight="'+ courseid.Weight + '",College="'+ courseid.Weight + '" WHERE Num=' + courseid.Num;
    console.log(query);
    connection.query(query,
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return
            }
            callback(false, result);
        }
    );
}


exports.Insertseason = function(courseid, callback) {
    console.log(courseid);
    var query = 'INSERT INTO Season_stats (Num, Name, MPG, FGP, ThreePP, APG, RPG, SPG, PPG) VALUES (\'' + courseid.Num + '\', \'' + courseid.Name + '\', \'' + courseid.MPG + '\', \'' + courseid.FGP + '\', \'' + courseid.ThreePP + '\',\'' + courseid.APG + '\',\'' + courseid.RPG + '\',\'' + courseid.SPG + '\',  \'' + courseid.PPG + '\')';
    console.log(query);
    connection.query(query,
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return
            }
            callback(false, result);
        }
    );
}


exports.Updateseason = function(courseid, callback) {
    console.log(courseid);
    var query = 'UPDATE Season_stats SET Name="'+ courseid.Name + '", MPG="'+ courseid.MPG + '",FGP="'+ courseid.FGP + '",ThreePP="'+ courseid.ThreePP + '",APG="'+ courseid.APG + '",RPG="'+ courseid.RPG + '",SPG="'+ courseid.SPG + '",PPG="'+ courseid.PPG + '" WHERE Num=' + courseid.Num;
    console.log(query);
    connection.query(query,
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return
            }
            callback(false, result);
        }
    );
}




exports.Updategame = function(courseid, callback) {
    console.log(courseid);
    var query = 'UPDATE Game_stats SET Name="'+ courseid.Name + '", Minutes="'+ courseid.Minutes + '",FG="'+ courseid.FG + '",ThreeP="'+ courseid.ThreeP + '",Assists="'+ courseid.Assists + '",Rebounds="'+ courseid.Rebounds + '",Steals="'+ courseid.Steals + '",Fouls="'+ courseid.Fouls + '", Turnovers="'+ courseid.Turnovers + '",Points="'+ courseid.Points + '" WHERE Num=' + courseid.Num;
    console.log(query);
    connection.query(query,
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return
            }
            callback(false, result);
        }
    );
}



exports.Updatestarting = function(courseid, callback) {
    console.log(courseid);
    var query = 'UPDATE Starters SET Position="'+ courseid.Position + '", Starter="'+ courseid.Starter + '",Second="'+ courseid.Second + '",Third="'+ courseid.Third + '" WHERE PositionID=' + courseid.PositionID;
    console.log(query);
    connection.query(query,
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return
            }
            callback(false, result);
        }
    );
}



exports.Insertgame = function(courseid, callback) {
    console.log(courseid);
    var query = 'INSERT INTO Game_stats (Num, Name, Minutes, FG, ThreeP, Assists, Rebounds, Steals, Fouls, Turnovers, Points) VALUES (\'' + courseid.Num + '\', \'' + courseid.Name + '\', \'' + courseid.Minutes + '\', \'' + courseid.FG + '\', \'' + courseid.ThreeP + '\',\'' + courseid.Assists + '\', \'' + courseid.Rebounds + '\',\'' + courseid.Steals + '\',\'' + courseid.Fouls + '\',\'' + courseid.Turnovers + '\', \'' + courseid.Points + '\')';
    console.log(query);
    connection.query(query,
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return
            }
            callback(false, result);
        }
    );
}


exports.Insertstarting = function(courseid, callback) {
    console.log(courseid);
    var query = 'INSERT INTO Starters (PositionID, Position, Starter, Second, Third) VALUES (\'' + courseid.PositionID + '\', \'' + courseid.Position + '\', \'' + courseid.Starter + '\', \'' + courseid.Second + '\',  \'' + courseid.Third + '\')';
    console.log(query);
    connection.query(query,
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return
            }
            callback(false, result);
        }
    );
}



exports.Deleteseason = function(courseid, callback) {
    console.log(courseid);
    var query = 'DELETE FROM Season_stats WHERE Num =' + courseid;
    console.log(query);
    connection.query(query,
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return
            }
            callback(false, result);
        }
    );
}



exports.Deletegame = function(courseid, callback) {
    console.log(courseid);
    var query = 'DELETE FROM Game_stats WHERE Num =' + courseid;
    console.log(query);
    connection.query(query,
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return
            }
            callback(false, result);
        }
    );
}

exports.Deleteroster = function(courseid, callback) {
    console.log(courseid);
    var query = 'DELETE FROM Team_roster WHERE Num =' + courseid;
    console.log(query);
    connection.query(query,
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return
            }
            callback(false, result);
        }
    );
}


exports.Deletestarting = function(courseid, callback) {
    console.log(courseid);
    var query = 'DELETE FROM Starters WHERE PositionID =' + courseid;
    console.log(query);
    connection.query(query,
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return
            }
            callback(false, result);
        }
    );
}