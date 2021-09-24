import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import { Grid, Card, CardActionArea, CardContent, Typography } from "@material-ui/core";
import Modal from "./halaman/Modal";

export const Kartu = createContext();

const Anggota = () => {
    const Font = {
        primary: {
            value: "sans-serif",
        },
        secondary: {
            value: "monoscape"
        },
    };

    const [anggota, setAnggota] = useState([]);
    const [modal, setModal] = useState(false);
    const [phone, setPhone] = useState("");
    const [valuefont, setValuefont] = useState(Font.primary);

    const handleModal = (phonenumb) => {
        setModal(true);
        setPhone(phonenumb);
    };

    useEffect(() => {
        axios
            .get("data.json")
            .then((data) => {
                console.log(data.data);
                setAnggota(data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    },      []);

    return (
        <Kartu.Provider value={valuefont}>
            <div style={{ marginTop: 20 }}>
                <Typography style={{margin: "auto", textAlign: "center", backgroundColor: '#5CE4FF', fontSize: "2.5em", fontStyle: "bold", fontColor: "white"}}>
                    Daftar Anggota
                </Typography>
                <Modal
                    phone={phone}
                    show={modal}
                    onHide={() => setModal(false)}
                    setfont={() => setValuefont(Font.secondary)}
                />
                <Grid container md={11} spacing={5} style={{ marginTop: "250px", marginLeft:"425px" }}>
                    {anggota.map((results) => {
                        return (
                            <Grid item key={results.nama} md={3}>
                                <Card>
                                    <CardActionArea onClick={() => handleModal(results.phone)}>
                                            <CardContent style={{ backgroundColor: '5CE4FF' }}>
                                                    <Typography>Nama : {results.nama}</Typography>
                                                    <Typography>NIM : {results.nim}</Typography>
                                                    <Typography>Alamat : {results.alamat}</Typography>
                                                    <Typography>Email : {results.email}</Typography>
                                                    <Typography>Nomor Telepon : {results.phone}</Typography>
                                            </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        );
                    })}
                </Grid>
            </div>
        </Kartu.Provider>
    );
};

export default Anggota;