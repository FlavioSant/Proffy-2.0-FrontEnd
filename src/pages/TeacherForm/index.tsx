import React, { useCallback, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles, Scope } from '@unform/core';
import * as Yup from 'yup';
import api from '../../services/api';

import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import PageHeader from '../../components/PageHeader';

import warningIcon from '../../assets/images/icons/warning.svg';

import {
  Container,
  Main,
  MainFooter,
  FieldSetBlock,
  ScheduleItem,
} from './styles';

interface ScheduleItemsProps {
  week_day: number;
  from: string;
  to: string;
}

interface TeacherFormData {
  name: string;
  avatar: string;
  whatsapp: string;
  bio: string;
  subject: string;
  cost: string;
  scheduleItems: ScheduleItemsProps[];
}

interface Errors {
  [key: string]: string;
}

const TeacherForm: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const history = useHistory();

  const [scheduleItems, setScheduleItems] = useState<ScheduleItemsProps[]>([
    { week_day: 0, from: '', to: '' },
  ]);

  const addNewScheduleItem = useCallback(() => {
    setScheduleItems([...scheduleItems, { week_day: 0, from: '', to: '' }]);
  }, [scheduleItems]);

  const handleCreateClass = useCallback(
    async (data: TeacherFormData) => {
      try {
        formRef.current.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório.'),
          avatar: Yup.string().required('Avatar obrigatório.'),
          whatsapp: Yup.string().required('Whatsapp obrigatório.'),
          bio: Yup.string().required('Bio obrigatório.'),
          subject: Yup.string().required('Matéria obrigatória.'),
          cost: Yup.string().required('Custo obrigatório.'),
          scheduleItems: Yup.array().of(
            Yup.object().shape({
              week_day: Yup.string().required('Dia da semana obrigatório.'),
              from: Yup.string().required('Horário obrigatório.'),
              to: Yup.string().required('Horário obrigatório.'),
            }),
          ),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('classes', {
          name: data.name,
          avatar: data.avatar,
          whatsapp: data.whatsapp,
          bio: data.bio,
          subject: data.subject,
          cost: Number(data.cost),
          schedule: data.scheduleItems,
        });

        history.push('/');
      } catch (err) {
        const validationErrors: Errors = {};

        if (err instanceof Yup.ValidationError) {
          err.inner.forEach((error) => {
            validationErrors[error.path] = error.message;
          });

          formRef.current.setErrors(validationErrors);
        }
      }
    },
    [history],
  );

  return (
    <Container>
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher esse formulário de inscrição"
      />

      <Main>
        <Form ref={formRef} onSubmit={handleCreateClass}>
          <FieldSetBlock>
            <legend>Seus dados</legend>
            <Input name="name" label="Nome completo" />
            <Input name="avatar" label="Avatar" />
            <Input name="whatsapp" label="Whatsapp" />
            <Textarea name="bio" label="Biografia" />
          </FieldSetBlock>

          <FieldSetBlock>
            <legend>Sobre a aula</legend>
            <Select
              name="subject"
              label="Matéria"
              options={[
                { value: 'Artes', label: 'Artes' },
                { value: 'Biologia', label: 'Biologia' },
                { value: 'Ciências', label: 'Ciências' },
                { value: 'Educação Física', label: 'Educação Física' },
                { value: 'Física', label: 'Física' },
                { value: 'Geografia', label: 'Geografia' },
                { value: 'História', label: 'História' },
                { value: 'Português', label: 'Português' },
                { value: 'Química', label: 'Química' },
              ]}
            />
            <Input name="cost" label="Custo da sua hora por aula" />
          </FieldSetBlock>

          <FieldSetBlock>
            <legend>
              Horários disponíveis{' '}
              <button type="button" onClick={addNewScheduleItem}>
                + Novo horário
              </button>
            </legend>

            {scheduleItems.map((_, index) => (
              <Scope key={index} path={`scheduleItems[${index}]`}>
                <ScheduleItem>
                  <Select
                    name="week_day"
                    label="Dia da semana"
                    options={[
                      { value: '0', label: 'Domingo' },
                      { value: '1', label: 'Segunda-feira' },
                      { value: '2', label: 'Terça-feira' },
                      { value: '3', label: 'Quarta-feira' },
                      { value: '4', label: 'Quinta-feira' },
                      { value: '5', label: 'Sexta-feira' },
                      { value: '6', label: 'Sábado' },
                    ]}
                  />
                  <Input name="from" label="Das" type="time" />
                  <Input name="to" label="Até" type="time" />
                </ScheduleItem>
              </Scope>
            ))}
          </FieldSetBlock>

          <MainFooter>
            <p>
              <img src={warningIcon} alt="Aviso importante" />
              Importante! <br />
              Preencha todos os dados
            </p>
            <button type="submit">Salvar cadastro</button>
          </MainFooter>
        </Form>
      </Main>
    </Container>
  );
};

export default TeacherForm;
