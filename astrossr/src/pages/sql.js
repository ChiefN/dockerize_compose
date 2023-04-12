import mysql from 'mysql'

export async function get({ params }) {
    var con = mysql.createConnection({
        host: "mysql",
        user: "user",
        password: "pass",
        database: "customdb",
      });
     
    let res = "fail";  
    await new Promise((resolve, reject) => {
        con.connect(function(err) {
            if (err) {
              reject(err)
              return
            }
        
            const sql = "SELECT * FROM test_table";
            con.query(sql, function(err, result) {
                if (err) {
                  reject(err)
                  return
                }

                res = JSON.stringify(result)
                resolve()
            })
        })
    })

    return new Response(res, {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
}


