(function () {

  function createTitle(title) {
    let titleBlock = document.createElement('h2')
    let row = document.createElement('div')

    row.classList.add('row')
    titleBlock.innerText = title

    row.append(titleBlock)
    return row
  }

  function generatePage() {
    let arrDate = [
      {
        name: 'Анатолий',
        surname: 'Пихулин',
        patronymic: 'Николаевич',
        date_birth: '1997-02-05',
        year_training: 2015,
        faculty: 'информационная безопасность'
      },
      {
        name: 'Никита',
        surname: 'Ручий',
        patronymic: 'Викторович',
        date_birth: '2001-10-15',
        year_training: 2017,
        faculty: 'информационная безопасность автоматизированных систем'
      },
      {
        name: 'Евгений',
        surname: 'Жуков',
        patronymic: 'Сергеевич',
        date_birth: '2000-04-06',
        year_training: 2018,
        faculty: 'информационная безопасность'
      },
    ]

    let div = document.createElement('div')
    let blockRow = document.createElement('div')
    let leftDiv = document.createElement('div')
    let rightDiv = document.createElement('div')
    let title = createTitle('Таблица студентов')
    let form = generateAddForm()
    let table = generateTable(arrDate)
    let filter = generateFilter(arrDate)

    div.classList.add('container')

    blockRow.classList.add('row')

    leftDiv.classList.add('col-6')
    rightDiv.classList.add('col-6', 'student')

    leftDiv.append(form)
    rightDiv.append(filter, table)

    blockRow.append(leftDiv, rightDiv)

    div.append(title, blockRow)

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      let student = {}

      let inputs = this.elements

      for (i = 0; i < inputs.length; i++) {
        if (inputs[i].nodeName === "INPUT") {
          student[inputs[i].id] = inputs[i].value
        }
      }

      arrDate.push(student)
      reloadTable(arrDate)
    })

    document.body.append(div)
  }

  function generateAddForm() {
    let div = document.createElement('div')
    let row = document.createElement('div')
    let form = document.createElement('form')
    let btnSubmit = document.createElement('button')

    let firstFormRow = document.createElement('div')
    let secondFormRow = document.createElement('div')
    let thirdFormRow = document.createElement('div')

    let formGroupName = document.createElement('div')
    let formGroupSurname = document.createElement('div')
    let formGroupPatronymic = document.createElement('div')
    let formGroupDateBirth = document.createElement('div')
    let formGroupYearTraining = document.createElement('div')
    let formGroupFaculty = document.createElement('div')

    let labelName = document.createElement('label')
    let labelSurname = document.createElement('label')
    let labelPatronymic = document.createElement('label')
    let labelDateBirth = document.createElement('label')
    let labelYearTraining = document.createElement('label')
    let labelFaculty = document.createElement('label')

    let inputName = document.createElement('input')
    let inputSurname = document.createElement('input')
    let inputPatronymic = document.createElement('input')
    let inputDateBirth = document.createElement('input')
    let inputYearTraining = document.createElement('input')
    let inputFaculty = document.createElement('input')

    let dateNow = new Date();

    inputName.required = true
    inputSurname.required = true
    inputPatronymic.required = true
    inputDateBirth.required = true
    inputYearTraining.required = true
    inputFaculty.required = true

    inputName.classList.add('form-control')
    inputSurname.classList.add('form-control')
    inputPatronymic.classList.add('form-control')
    inputDateBirth.classList.add('form-control')
    inputYearTraining.classList.add('form-control')
    inputFaculty.classList.add('form-control')

    inputName.type = 'text'
    inputSurname.type = 'text'
    inputPatronymic.type = 'text'
    inputDateBirth.type = 'date'
    inputYearTraining.type = 'number'
    inputFaculty.type = 'text'

    inputDateBirth.min = '1900-01-01'
    inputDateBirth.max = `${dateNow.getFullYear()}-${dateNow.getMonth() + 1}-${dateNow.getDate()}`

    inputYearTraining.min = '2000'
    inputYearTraining.max = `${dateNow.getFullYear()}`

    inputName.id = labelName.for = 'name'
    inputSurname.id = labelSurname.for = 'surname'
    inputPatronymic.id = labelPatronymic.for = 'patronymic'
    inputDateBirth.id = labelDateBirth.for = 'date_birth'
    inputYearTraining.id = labelYearTraining.for = 'year_training'
    inputFaculty.id = labelFaculty.for = 'faculty'

    row.classList.add('row')
    div.classList.add('container')

    btnSubmit.classList.add('btn', 'btn-primary', 'btn-lg', 'btn-block')
    btnSubmit.innerText = 'Добавить'
    btnSubmit.type = 'submit'

    firstFormRow.classList.add('form-row')
    secondFormRow.classList.add('form-row')
    thirdFormRow.classList.add('form-row')

    formGroupName.classList.add('form-group', 'col-6')
    formGroupSurname.classList.add('form-group', 'col-6')
    formGroupPatronymic.classList.add('form-group', 'col-6')
    formGroupDateBirth.classList.add('form-group', 'col-6')
    formGroupYearTraining.classList.add('form-group', 'col-6')
    formGroupFaculty.classList.add('form-group', 'col-6')

    labelName.innerText = 'Имя'
    labelSurname.innerText = 'Фамилия'
    labelPatronymic.innerText = 'Отчество'
    labelDateBirth.innerText = 'Дата рождения'
    labelYearTraining.innerText = 'Год начала обучения'
    labelFaculty.innerText = 'Факультет'

    formGroupName.append(labelName)
    formGroupSurname.append(labelSurname)
    formGroupPatronymic.append(labelPatronymic)
    formGroupDateBirth.append(labelDateBirth)
    formGroupYearTraining.append(labelYearTraining)
    formGroupFaculty.append(labelFaculty)

    formGroupName.append(inputName)
    formGroupSurname.append(inputSurname)
    formGroupPatronymic.append(inputPatronymic)
    formGroupDateBirth.append(inputDateBirth)
    formGroupYearTraining.append(inputYearTraining)
    formGroupFaculty.append(inputFaculty)

    firstFormRow.append(formGroupName, formGroupSurname)
    secondFormRow.append(formGroupPatronymic, formGroupDateBirth)
    thirdFormRow.append(formGroupYearTraining, formGroupFaculty)

    form.append(firstFormRow, secondFormRow, thirdFormRow, btnSubmit)

    return form
  }

  function generateTable(arrDate = null) {
    let table = document.createElement('table')
    let thead = document.createElement('thead')
    let trHead = document.createElement('tr')
    let tbody = document.createElement('tbody')

    let thHeadNumber = document.createElement('th')
    let thHeadFullName = document.createElement('th')
    let thHeadFaculty = document.createElement('th')
    let thHeadAge = document.createElement('th')
    let thHeadTraining = document.createElement('th')

    thHeadNumber.scope = 'col'
    thHeadFullName.scope = 'col'
    thHeadFaculty.scope = 'col'
    thHeadAge.scope = 'col'
    thHeadTraining.scope = 'col'

    thHeadFullName.addEventListener('click', () => { reloadTable(sortByFullName(arrDate)) } )
    thHeadFaculty.addEventListener('click', () => { reloadTable(sortByFaculty(arrDate)) } )
    thHeadAge.addEventListener('click', () => { reloadTable(sortByAge(arrDate)) } )
    thHeadTraining.addEventListener('click', () => { reloadTable(sortByTraining(arrDate)) } )

    thHeadNumber.innerText = '#'
    thHeadFullName.innerText = 'ФИО студента'
    thHeadFaculty.innerText = 'Факультет'
    thHeadAge.innerText = 'Дата рождения'
    thHeadTraining.innerText = 'Годы обучения'

    if (arrDate) {
      arrDate.forEach((item, i) => tbody.append(generateArrTr(item, i)))
    }

    trHead.append(thHeadNumber, thHeadFullName, thHeadFaculty, thHeadAge, thHeadTraining)

    thead.append(trHead)

    table.classList.add('table', 'table-striped', 'table-students')
    table.append(thead, tbody)

    return table
  }

  function reloadTable(arrDate) {
    if (document.querySelector('.table-students')) {
      document.querySelector('.table-students').remove()
    }

    if (document.querySelector('.student')) {
      document.querySelector('.student').append(generateTable(arrDate))
    }

    return generateTable(arrDate)
  }

  function generateArrTr(data, index) {
    let tr = document.createElement('tr')
    let thHeadNumber = document.createElement('th')
    let thHeadFullName = document.createElement('th')
    let thHeadFaculty = document.createElement('th')
    let thHeadAge = document.createElement('th')
    let thHeadTraining = document.createElement('th')

    thHeadNumber.innerText = index + 1
    thHeadFullName.innerText = getFullName(data)
    thHeadFaculty.innerText = getFaculty(data)
    thHeadAge.innerText = getAge(data)
    thHeadTraining.innerText = getTraining(data)

    tr.append(thHeadNumber, thHeadFullName, thHeadFaculty, thHeadAge, thHeadTraining)

    if (data.display === 'none') {
      tr.style.display = 'none'
    }

    return tr
  }

  function generateFilter(arrDate) {
    let div = document.createElement('div')
    let inputFullName = document.createElement('input')
    let inputFaculty = document.createElement('input')
    let inputStartTraining = document.createElement('input')
    let inputFinishTraining = document.createElement('input')
    let moreOne = false

    inputFullName.classList.add('col-3')
    inputFaculty.classList.add('col-3')
    inputStartTraining.classList.add('col-3')
    inputFinishTraining.classList.add('col-3')

    inputFullName.addEventListener('input', function () {
      reloadTable(filterFullName(arrDate, inputFullName.value))
    })
    inputFaculty.addEventListener('input', function () {
      reloadTable(filterFaculty(arrDate, inputFaculty.value))
    })
    inputStartTraining.addEventListener('input', function () {
      reloadTable(filterStartTraining(arrDate, inputStartTraining.value))
    })
    inputFinishTraining.addEventListener('input', function () {
      reloadTable(filterEndTraining(arrDate, inputFinishTraining.value))
    })

    inputFullName.placeholder = 'ФИО'
    inputFaculty.placeholder = 'Факультут'
    inputStartTraining.placeholder = 'Год начала обучения'
    inputFinishTraining.placeholder = 'Год окончания обучения'

    div.classList.add('row')

    div.append(inputFullName, inputFaculty, inputStartTraining, inputFinishTraining)

    return div
  }

  function getFullName(date) {
    return `${date.surname} ${date.name} ${date.patronymic}`
  }

  function getFaculty(date) {
    return date.faculty
  }

  function getAge(date) {
    let now = new Date();
    let birth = new Date(date.date_birth);
    let age = now.getFullYear() - birth.getFullYear();
    return `${date.date_birth} (${age})`
  }

  function getTraining(date) {
    let now = new Date();
    let dateStart = new Date(`${date.year_training}-09-01`);
    let course = now.getFullYear() - dateStart.getFullYear();

    if (course > 4) {
      return `${date.year_training} - ${dateStart.getFullYear() + 4} (закончил)`;
    } else {
      return `${date.year_training} - ${dateStart.getFullYear() + 4} (${course})`;
    }
  }

  function sortByFullName(arr) {
    return arr.sort((a, b) => getFullName(a)> getFullName(b) ? 1 : -1);
  }

  function sortByFaculty(arr) {
    return arr.sort((a, b) => a.faculty > b.faculty ? 1 : -1);
  }

  function sortByAge(arr) {
    return arr.sort((a, b) => a.date_birth > b.date_birth ? 1 : -1);
  }

  function sortByTraining(arr) {
    return arr.sort((a, b) => a.year_training > b.year_training ? 1 : -1);
  }

  function filterFullName(arr, value) {
    let result = arr
    const reg = value.replace('"', "/")

    for (const item of result) {
      if (getFullName(item).match(reg) && item.display === 'block' || value.length === 0 ) {
        item.display = 'block'
      } else {
        item.display = 'none'
      }
    }

    return result;
  }

  function filterFaculty(arr, value) {
    let result = arr
    const reg = value.replace('"', "/")

    for (const item of result) {
      if (item.faculty.match(reg) && item.display === 'block' || value.length === 0 ) {
        item.display = 'block'
      } else {
        item.display = 'none'
      }
    }

    return result;
  }

  function filterStartTraining(arr, value) {
    let result = arr
    const reg = value.replace('"', "/")

    for (const item of result) {
      if (String(item.year_training).match(reg) && item.display === 'block' || value.length === 0) {
        item.display = 'block'
      } else {
        item.display = 'none'
      }
    }

    return result;
  }

  function filterEndTraining(arr, value) {
    let result = arr
    const reg = value.replace('"', "/")

    for (const item of result) {
      if (String(item.year_training + 4).match(reg) && item.display === 'block' || value.length === 0) {
        item.display = 'block'
      } else {
        item.display = 'none'
      }
    }

    return result;
  }

  generatePage()
})()
