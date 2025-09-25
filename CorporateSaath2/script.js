document.addEventListener('DOMContentLoaded', () => {

    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

         darkModeToggle.addEventListener('click', () => {
                body.classList.toggle('dark');
            });

    const menuBtn = document.getElementById('menu-btn');
     const sidebar = document.querySelector('aside');
            menuBtn.addEventListener('click', () => {
                sidebar.classList.toggle('-translate-x-full');
            });

    const tabButtons = document.querySelectorAll('.tab-btn');
      const tabContents = document.querySelectorAll('.tab-content');

         tabButtons.forEach(button => {
           button.addEventListener('click', () => {
                 tabContents.forEach(content => {
                    content.classList.remove('active');
                    });
                    tabButtons.forEach(btn => {
                      btn.classList.remove('bg-brand-blue', 'text-white');
                      btn.classList.add('bg-gray-200', 'text-gray-800', 'dark:bg-gray-700', 'dark:text-gray-200');
                    });

            const targetId = button.getAttribute('data-target');
                document.getElementById(targetId).classList.add('active');
                 button.classList.add('bg-brand-blue', 'text-white');
                 button.classList.remove('bg-gray-200', 'text-gray-800', 'dark:bg-gray-700', 'dark:text-gray-200');
                });
            });


     const chartColors = ['#6366f1', '#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];

            const attendanceDataMonthly = {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                datasets: [{
                    label: 'Attendance %',
                    data: [85, 88, 92, 90, 95, 93, 94],
                    backgroundColor: chartColors[0],
                }]
            };

            const attendanceDataDaily = {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                datasets: [{
                    label: 'Attendance %',
                    data: [90, 92, 88, 95, 91],
                    backgroundColor: chartColors[0],
                }]
            };

            const servicesData = {
                labels: ['Requested', 'Completed'],
                datasets: [{
                    label: 'Services',
                    data: [1250, 980],
                    backgroundColor: [chartColors[1], chartColors[2]],
                }]
            };

            const tasksData = {
                labels: ['Sales', 'Marketing', 'Engineering', 'HR'],
                datasets: [{
                    label: 'Tasks Completed',
                    data: [75, 60, 95, 80],
                    backgroundColor: [
                        'rgba(99, 102, 241, 0.8)',
                        'rgba(59, 130, 246, 0.8)',
                        'rgba(16, 185, 129, 0.8)',
                        'rgba(245, 158, 11, 0.8)'
                    ],
                    borderColor: 'transparent',
                }]
            };

            const financialData = {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                datasets: [{
                    label: 'Revenue',
                    data: [500, 600, 750, 700, 800, 950, 1000],
                    borderColor: chartColors[2],
                    backgroundColor: 'rgba(16, 185, 129, 0.2)',
                    tension: 0.4,
                    fill: true
                }, {
                    label: 'Expenses',
                    data: [350, 400, 420, 480, 500, 550, 600],
                    borderColor: chartColors[3],
                    backgroundColor: 'rgba(245, 158, 11, 0.2)',
                    tension: 0.4,
                    fill: true
                }]
            };

            const clientsData = {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                datasets: [{
                    label: 'New Clients',
                    data: [15, 20, 25, 22, 30, 28, 35],
                    borderColor: chartColors[0],
                    backgroundColor: 'rgba(99, 102, 241, 0.2)',
                    tension: 0.4,
                    fill: true
                }]
            };

     const attendanceCtx = document.getElementById('attendanceChart').getContext('2d');
            let attendanceChart = new Chart(attendanceCtx, {
                type: 'bar',
                data: attendanceDataMonthly,
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    },
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltip: {
                            mode: 'index',
                            intersect: false
                        }
                  }
        }
    });

     const servicesCtx = document.getElementById('servicesChart').getContext('2d');
        const servicesChart = new Chart(servicesCtx, {
                type: 'bar', 
                data: servicesData,
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    indexAxis: 'y', 
                    scales: {
                        x: {
                            beginAtZero: true
                        }
                    },
                    plugins: {
                        legend: {
                            display: false
                        }
                    }
            }
       });

    const tasksCtx = document.getElementById('tasksChart').getContext('2d');
      const tasksChart = new Chart(tasksCtx, {
                type: 'doughnut', 
                data: tasksData,
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'right',
                            labels: {
                                color: 'rgb(107, 114, 128)' 
                            }
                        }
                }
        }
    });

     const financeCtx = document.getElementById('financeChart').getContext('2d');
        const financeChart = new Chart(financeCtx, {
                type: 'line',
                data: financialData,
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    },
                    plugins: {
                        legend: {
                            position: 'bottom',
                            labels: {
                                color: 'rgb(107, 114, 128)'
                            }
                        }
                    }
         }
     });

     const clientsCtx = document.getElementById('clientsChart').getContext('2d');
        const clientsChart = new Chart(clientsCtx, {
                type: 'line',
                data: clientsData,
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    },
                    plugins: {
                        legend: {
                            display: false
                        }
                 }
         }
      });

     const attendanceDailyBtn = document.getElementById('attendance-daily-btn');
     const attendanceMonthlyBtn = document.getElementById('attendance-monthly-btn');

        attendanceDailyBtn.addEventListener('click', () => {
            attendanceChart.data = attendanceDataDaily;
            attendanceChart.update();
            attendanceDailyBtn.classList.add('bg-brand-blue', 'text-white');
            attendanceDailyBtn.classList.remove('bg-gray-200', 'dark:bg-gray-700', 'text-gray-800', 'dark:text-gray-200');
            attendanceMonthlyBtn.classList.remove('bg-brand-blue', 'text-white');
            attendanceMonthlyBtn.classList.add('bg-gray-200', 'dark:bg-gray-700', 'text-gray-800', 'dark:text-gray-200');
            });

        attendanceMonthlyBtn.addEventListener('click', () => {
            attendanceChart.data = attendanceDataMonthly;
            attendanceChart.update();
            attendanceMonthlyBtn.classList.add('bg-brand-blue', 'text-white');
            attendanceMonthlyBtn.classList.remove('bg-gray-200', 'dark:bg-gray-700', 'text-gray-800', 'dark:text-gray-200');
            attendanceDailyBtn.classList.remove('bg-brand-blue', 'text-white');
            attendanceDailyBtn.classList.add('bg-gray-200', 'dark:bg-gray-700', 'text-gray-800', 'dark:text-gray-200');
            });

    // -------------------------
    // ADDED CODE (no original lines changed) - start
    // -------------------------

    // Sidebar navigation switching for newly added sections
    const navLinks = document.querySelectorAll("aside nav a");
    navLinks.forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault();
        const targetId = link.getAttribute("data-target");
        if (!targetId) return;

        // hide top tab active style & hide all tab-content
        document.querySelectorAll(".tab-content").forEach(sec => {
          sec.classList.add("hidden");
          sec.classList.remove("active");
        });

        // show target
        const target = document.getElementById(targetId);
        if (target) {
          target.classList.remove("hidden");
          target.classList.add("active");
        }

        // update sidebar active class
        navLinks.forEach(l => l.classList.remove("bg-gray-700", "text-white"));
        link.classList.add("bg-gray-700", "text-white");
      });
    });

    // Elements for employee CRUD
    const employeesTbody = document.getElementById('employeesTbody');
    const departmentsTbody = document.getElementById('departmentsTbody');
    const employeeModal = document.getElementById('employeeModal');
    const departmentModal = document.getElementById('departmentModal');
    const employeeNameInput = document.getElementById('employeeNameInput');
    const employeeRoleInput = document.getElementById('employeeRoleInput');
    const employeeDeptInput = document.getElementById('employeeDeptInput');
    const employeeDocsInput = document.getElementById('employeeDocsInput');
    const saveEmployeeBtn = document.getElementById('saveEmployeeBtn');
    const closeEmployeeModal = document.getElementById('closeEmployeeModal');
    const openEmployeeModal = document.getElementById('openEmployeeModal');

    const departmentNameInput = document.getElementById('departmentNameInput');
    const departmentHeadInput = document.getElementById('departmentHeadInput');
    const saveDepartmentBtn = document.getElementById('saveDepartmentBtn');
    const closeDepartmentModal = document.getElementById('closeDepartmentModal');
    const openDepartmentModal = document.getElementById('openDepartmentModal');

    const employeeDetailModal = document.getElementById('employeeDetailModal');
    const detailName = document.getElementById('detailName');
    const detailRole = document.getElementById('detailRole');
    const detailDept = document.getElementById('detailDept');
    const detailPerms = document.getElementById('detailPerms');
    const detailDocs = document.getElementById('detailDocs');
    const closeEmployeeDetail = document.getElementById('closeEmployeeDetail');

    let editingEmployeeRow = null;
    let editingDeptRow = null;

    // Helpers
    function generateId(prefix = 'id') {
      return prefix + '-' + Date.now() + '-' + Math.floor(Math.random() * 1000);
    }

    function updateDepartmentResources() {
      // calculate employees per department and update .dept-resources cells
      const counts = {};
      employeesTbody.querySelectorAll('tr').forEach(tr => {
        const dept = tr.children[2].innerText.trim();
        if (!dept) return;
        counts[dept] = (counts[dept] || 0) + 1;
      });

      departmentsTbody.querySelectorAll('tr').forEach(tr => {
        const deptName = tr.children[0].innerText.trim();
        const resCell = tr.querySelector('.dept-resources');
        if (resCell) {
          const count = counts[deptName] || 0;
          resCell.innerText = `${count} Employee${count !== 1 ? 's' : ''}`;
        }
      });

      // update top activeEmployees card (optional)
      const activeEl = document.getElementById('activeEmployees');
      if (activeEl) {
        const total = employeesTbody.querySelectorAll('tr').length;
        activeEl.innerText = `${total}/${Math.max(300, total)}`;
      }
    }

    // Employee row creation
    function createEmployeeRow({ id, name, role, dept, perms, docs }) {
      const tr = document.createElement('tr');
      tr.className = 'border-b dark:border-gray-700';
      tr.setAttribute('data-empid', id);

      const nameCell = document.createElement('td');
      nameCell.className = 'p-3';
      const nameBtn = document.createElement('button');
      nameBtn.className = 'employee-name text-left underline';
      nameBtn.textContent = name;
      nameCell.appendChild(nameBtn);

      const roleCell = document.createElement('td');
      roleCell.className = 'p-3';
      roleCell.innerText = role;

      const deptCell = document.createElement('td');
      deptCell.className = 'p-3';
      deptCell.innerText = dept;

      const actionsCell = document.createElement('td');
      actionsCell.className = 'p-3 flex gap-2';
      const editBtn = document.createElement('button');
      editBtn.className = 'edit-employee px-2 py-1 text-xs rounded bg-brand-blue text-white';
      editBtn.innerText = 'Edit';
      const delBtn = document.createElement('button');
      delBtn.className = 'delete-employee px-2 py-1 text-xs rounded bg-red-500 text-white';
      delBtn.innerText = 'Delete';

      actionsCell.appendChild(editBtn);
      actionsCell.appendChild(delBtn);

      tr.appendChild(nameCell);
      tr.appendChild(roleCell);
      tr.appendChild(deptCell);
      tr.appendChild(actionsCell);

      // handlers
      nameBtn.addEventListener('click', () => {
        // show detail modal
        detailName.innerText = name;
        detailRole.innerText = `Role: ${role}`;
        detailDept.innerText = `Department: ${dept}`;
        detailPerms.innerText = `Permissions: ${perms && perms.length ? perms.join(', ') : 'None'}`;
        if (docs && docs.length) {
          detailDocs.innerHTML = 'Documents: <ul>' + docs.map(d => `<li>${d}</li>`).join('') + '</ul>';
        } else {
          detailDocs.innerText = 'Documents: None';
        }
        employeeDetailModal.classList.remove('hidden');
      });

      editBtn.addEventListener('click', () => {
        editingEmployeeRow = tr;
        // prefill form
        employeeNameInput.value = name;
        employeeRoleInput.value = role;
        employeeDeptInput.value = dept;
        // perms simple: use checkboxes if present
        document.getElementById('permView').checked = perms && perms.includes('View');
        document.getElementById('permEdit').checked = perms && perms.includes('Edit');
        employeeModal.classList.remove('hidden');
      });

      delBtn.addEventListener('click', () => {
        if (confirm(`Delete employee ${name}?`)) {
          tr.remove();
          updateDepartmentResources();
        }
      });

      employeesTbody.appendChild(tr);
    }

    // Department row creation
    function createDepartmentRow({ id, name, head }) {
      const tr = document.createElement('tr');
      tr.className = 'border-b dark:border-gray-700';
      tr.setAttribute('data-deptid', id);

      const nameCell = document.createElement('td');
      nameCell.className = 'p-3';
      nameCell.innerText = name;

      const headCell = document.createElement('td');
      headCell.className = 'p-3';
      headCell.innerText = head;

      const resourcesCell = document.createElement('td');
      resourcesCell.className = 'p-3 dept-resources';
      resourcesCell.innerText = '0 Employees';

      const actionsCell = document.createElement('td');
      actionsCell.className = 'p-3 flex gap-2';
      const editBtn = document.createElement('button');
      editBtn.className = 'edit-dept px-2 py-1 text-xs rounded bg-brand-blue text-white';
      editBtn.innerText = 'Edit';
      const delBtn = document.createElement('button');
      delBtn.className = 'delete-dept px-2 py-1 text-xs rounded bg-red-500 text-white';
      delBtn.innerText = 'Delete';
      actionsCell.appendChild(editBtn);
      actionsCell.appendChild(delBtn);

      tr.appendChild(nameCell);
      tr.appendChild(headCell);
      tr.appendChild(resourcesCell);
      tr.appendChild(actionsCell);

      editBtn.addEventListener('click', () => {
        editingDeptRow = tr;
        departmentNameInput.value = name;
        departmentHeadInput.value = head;
        departmentModal.classList.remove('hidden');
      });

      delBtn.addEventListener('click', () => {
        if (confirm(`Delete department ${name}?`)) {
          tr.remove();
          updateDepartmentResources();
        }
      });

      departmentsTbody.appendChild(tr);
      updateDepartmentResources();
    }

    // open/close modals
    if (openEmployeeModal) openEmployeeModal.addEventListener('click', () => {
      editingEmployeeRow = null;
      employeeNameInput.value = '';
      employeeRoleInput.value = 'Manager';
      employeeDeptInput.value = '';
      document.getElementById('permView').checked = false;
      document.getElementById('permEdit').checked = false;
      employeeModal.classList.remove('hidden');
    });

    if (closeEmployeeModal) closeEmployeeModal.addEventListener('click', () => {
      employeeModal.classList.add('hidden');
    });

    if (openDepartmentModal) openDepartmentModal.addEventListener('click', () => {
      editingDeptRow = null;
      departmentNameInput.value = '';
      departmentHeadInput.value = '';
      departmentModal.classList.remove('hidden');
    });

    if (closeDepartmentModal) closeDepartmentModal.addEventListener('click', () => {
      departmentModal.classList.add('hidden');
    });

    if (closeEmployeeDetail) closeEmployeeDetail.addEventListener('click', () => {
      employeeDetailModal.classList.add('hidden');
    });

    // Save employee
    if (saveEmployeeBtn) saveEmployeeBtn.addEventListener('click', () => {
      const name = employeeNameInput.value.trim();
      const role = employeeRoleInput.value;
      const dept = employeeDeptInput.value.trim();
      const perms = [];
      if (document.getElementById('permView').checked) perms.push('View');
      if (document.getElementById('permEdit').checked) perms.push('Edit');

      const docs = [];
      if (employeeDocsInput.files && employeeDocsInput.files.length) {
        for (let i = 0; i < employeeDocsInput.files.length; i++) {
          docs.push(employeeDocsInput.files[i].name);
        }
      }

      if (!name) {
        alert('Employee name required');
        return;
      }

      if (editingEmployeeRow) {
        // update existing
        editingEmployeeRow.children[0].querySelector('button').innerText = name;
        editingEmployeeRow.children[1].innerText = role;
        editingEmployeeRow.children[2].innerText = dept;
        // close
        editingEmployeeRow = null;
      } else {
        const id = generateId('emp');
        createEmployeeRow({ id, name, role, dept, perms, docs });
      }

      employeeModal.classList.add('hidden');
      updateDepartmentResources();
    });

    // Save department
    if (saveDepartmentBtn) saveDepartmentBtn.addEventListener('click', () => {
      const name = departmentNameInput.value.trim();
      const head = departmentHeadInput.value.trim();
      if (!name) {
        alert('Department name required');
        return;
      }
      if (editingDeptRow) {
        editingDeptRow.children[0].innerText = name;
        editingDeptRow.children[1].innerText = head;
        editingDeptRow = null;
      } else {
        const id = generateId('dept');
        createDepartmentRow({ id, name, head });
      }
      departmentModal.classList.add('hidden');
      updateDepartmentResources();
    });

    // Attach Edit/Delete handlers to existing initial rows (to keep original table rows functional)
    function attachHandlersToInitialRows() {
      // employees
      employeesTbody.querySelectorAll('tr').forEach(tr => {
        const editBtn = tr.querySelector('.edit-employee');
        const delBtn = tr.querySelector('.delete-employee');
        const nameBtn = tr.querySelector('.employee-name');
        if (nameBtn) {
          nameBtn.addEventListener('click', () => {
            const name = nameBtn.innerText.trim();
            const role = tr.children[1].innerText.trim();
            const dept = tr.children[2].innerText.trim();
            detailName.innerText = name;
            detailRole.innerText = `Role: ${role}`;
            detailDept.innerText = `Department: ${dept}`;
            detailPerms.innerText = `Permissions: None`;
            detailDocs.innerText = 'Documents: None';
            employeeDetailModal.classList.remove('hidden');
          });
        }
        if (editBtn) {
          editBtn.addEventListener('click', () => {
            editingEmployeeRow = tr;
            employeeNameInput.value = tr.children[0].innerText.trim();
            employeeRoleInput.value = tr.children[1].innerText.trim();
            employeeDeptInput.value = tr.children[2].innerText.trim();
            employeeModal.classList.remove('hidden');
          });
        }
        if (delBtn) {
          delBtn.addEventListener('click', () => {
            if (confirm(`Delete employee ${tr.children[0].innerText.trim()}?`)) {
              tr.remove();
              updateDepartmentResources();
            }
          });
        }
      });

      // departments
      departmentsTbody.querySelectorAll('tr').forEach(tr => {
        const editBtn = tr.querySelector('.edit-dept');
        const delBtn = tr.querySelector('.delete-dept');
        if (editBtn) {
          editBtn.addEventListener('click', () => {
            editingDeptRow = tr;
            departmentNameInput.value = tr.children[0].innerText.trim();
            departmentHeadInput.value = tr.children[1].innerText.trim();
            departmentModal.classList.remove('hidden');
          });
        }
        if (delBtn) {
          delBtn.addEventListener('click', () => {
            if (confirm(`Delete department ${tr.children[0].innerText.trim()}?`)) {
              tr.remove();
              updateDepartmentResources();
            }
          });
        }
      });
    }

    attachHandlersToInitialRows();
    updateDepartmentResources();

    // Export CSV (simple)
    const exportEmployeesBtn = document.getElementById('exportEmployeesBtn');
    if (exportEmployeesBtn) exportEmployeesBtn.addEventListener('click', () => {
      const rows = [['Name','Role','Department']];
      employeesTbody.querySelectorAll('tr').forEach(tr => {
        const name = tr.children[0].innerText.trim();
        const role = tr.children[1].innerText.trim();
        const dept = tr.children[2].innerText.trim();
        rows.push([name,role,dept]);
      });
      const csv = rows.map(r => r.map(c => `"${c.replace(/"/g,'""')}"`).join(',')).join('\n');
      const blob = new Blob([csv], { type: 'text/csv' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'employees.csv';
      a.click();
      URL.revokeObjectURL(url);
    });

    const exportDepartmentsBtn = document.getElementById('exportDepartmentsBtn');
    if (exportDepartmentsBtn) exportDepartmentsBtn.addEventListener('click', () => {
      const rows = [['Department','Head','Resources']];
      departmentsTbody.querySelectorAll('tr').forEach(tr => {
        const name = tr.children[0].innerText.trim();
        const head = tr.children[1].innerText.trim();
        const resources = tr.children[2].innerText.trim();
        rows.push([name, head, resources]);
      });
      const csv = rows.map(r => r.map(c => `"${c.replace(/"/g,'""')}"`).join(',')).join('\n');
      const blob = new Blob([csv], { type: 'text/csv' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'departments.csv';
      a.click();
      URL.revokeObjectURL(url);
    });

    // -------------------------
    // ADDED CODE - end
    // -------------------------

});
