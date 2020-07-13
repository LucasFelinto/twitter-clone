import React from 'react';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocalationIcon,
  CakeIcon,
  Followage,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        {/* <EditButton outlined>Editar perfil</EditButton> */}

        <h1>Lucas Felinto</h1>
        <h2>@zarkarofe</h2>

        <p>Developer</p>

        <ul>
          <li>
            <LocalationIcon />
            Igarassu, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 21 de junhto de 2001
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>94</strong>
          </span>
          <span>
            <strong>672 </strong>seguidores
          </span>
        </Followage>
      </ProfileData>
    </Container>
  );
};

export default ProfilePage;
